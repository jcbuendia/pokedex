export const mapRegisterForm = (_values, selectedGender) => {
  const values = {
    name: `${_values.name} ${_values.lastName} ${_values.mothersLastName}`,
    phone: _values.phone,
    id_device: _values.phone,
    email: _values.email === '' ? undefined : _values.email,
    age: _values.age === '' ? undefined : _values.age,
    gender: selectedGender === null ? undefined : selectedGender,
    postal_code: _values.postalCode === '' ? undefined : _values.postalCode
  };

  return values;
};
