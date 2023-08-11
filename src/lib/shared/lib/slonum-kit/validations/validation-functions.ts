interface ILength {
  min?: number;
  max?: number;
}

export const validationCheckLength = (
  data: ILength,
  value: string | number,
) => {
  const _value = value ? value.toString() : '';
  const length = _value.length;
  const min = data?.min;
  const max = data?.max;

  //console.log('value');
  //console.log(_value);

  if (min && max) {
    if (length >= min && length <= max) return true;
    return false;
  }

  if (min) {
    if (length < min) return false;
    return true;
  }

  if (max) {
    if (length > max) return false;
    return true;
  }
};
