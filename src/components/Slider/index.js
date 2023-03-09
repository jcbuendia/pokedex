import React, { useRef, useState, useEffect, memo } from 'react';
import { FlatList, Text, View } from 'native-base';
import { useStyles } from './styles';
import { Control } from './Control';
import { size } from 'lodash';
import { SliderItem } from './SliderItem';

export const Slider = memo((props) => {
  const {
    data,
    prefix = 'common-slider',
    autoPlay: auto = true,
    showPagination = false,
    time = 4000,
    onPressItem
  } = props;
  const flatListRef = useRef(null);
  const styles = useStyles();
  const [page, setPage] = useState(0);
  const [isChangingPage, setIsChangingPage] = useState(false);
  const [autoPlay, setAutoPlay] = useState(auto);
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 99 });
  const dataSize = size(data);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay && dataSize > 0) {
        if (page < dataSize - 1) {
          flatListRef.current.scrollToIndex({
            animated: true,
            index: page + 1
          });
        } else {
          setPage(0);
          flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
      }
    }, time);
    return () => clearInterval(interval);
  }, [page, autoPlay, dataSize, time]);

  const onViewRef = React.useRef((list) => {
    const currentIndex = list?.viewableItems[0]?.index;
    if (currentIndex !== undefined) {
      setIsChangingPage(false);
      setPage(currentIndex);
    }
  });

  const onScrollEnd = () => {
    if (isChangingPage) {
      setIsChangingPage(false);
    }
  };

  const handleBack = () => {
    if (page > 0) {
      flatListRef.current.scrollToIndex({ animated: true, index: page - 1 });
      setAutoPlay(false);
    }
  };

  const handleRight = () => {
    if (page < dataSize - 1) {
      flatListRef.current.scrollToIndex({ animated: true, index: page + 1 });
      setAutoPlay(false);
    }
  };

  const onScrollBeginDrag = () => {
    setIsChangingPage(true);
    setAutoPlay(false);
  };

  if (dataSize < 1) {
    return null;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <Control onPress={handleBack} disabled={page === 0} />
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          renderItem={({ item }) => (
            <SliderItem url={item.url} onPress={() => onPressItem(page)} />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_item, index) => `${prefix}-${index}`}
          pagingEnabled
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          decelerationRate={'fast'}
          snapToAlignment={'start'}
          onScrollEndDrag={onScrollEnd}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          onScrollBeginDrag={onScrollBeginDrag}
        />
        <Control
          variant="right"
          onPress={handleRight}
          disabled={page === dataSize - 1}
        />
      </View>
      {showPagination && (
        <Text style={styles.pagination}>{`${page}/${dataSize - 1}`}</Text>
      )}
    </>
  );
});
