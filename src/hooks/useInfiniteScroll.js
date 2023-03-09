import { responseMapper } from '@utils/responseMapper';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

export const useInfiniteScroll = (
  getItems,
  { itemsPerPage = 5, itemTemplate } = {}
) => {
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    return () => (mounted.current = false);
  }, []);

  const handleGetItems = async () => {
    setLoading(true);

    try {
      const {
        headerResponse: { status },
        payload: { list, pages, currentPage }
      } = await getItems({
        queryString: { page: page + 1, items: itemsPerPage }
      });

      if (status === 200 && mounted.current) {
        setItems((items) => [
          ...items,
          ...(itemTemplate
            ? responseMapper({ template: itemTemplate, data: list })
            : list)
        ]);
        setPage(currentPage);
        setTotalPages(pages);
      }
    } catch {
    } finally {
      if (mounted.current) {
        setLoading(false);
        setLoadingInitial(false);
      }
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return [
    items,
    handleGetItems,
    { loadingInitial, loading, thereIsMore: page !== totalPages }
  ];
};
