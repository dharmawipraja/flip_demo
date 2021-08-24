import React from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import { useSelector, useDispatch } from 'react-redux';

import Color from '../../Constants/Colors';
import { sort } from '../../Reducer/Sort.slice';
import styles from './SortModal.styles';

const SortModal = ({ modalVisible, onBackDropPress }) => {
  const radioProps = [
    { label: 'URUTKAN', value: 'default' },
    { label: 'Nama A-Z', value: 'sortByNameAsc' },
    { label: 'Nama Z-A', value: 'sortByNameDesc' },
    { label: 'Tanggal Terbaru', value: 'sortByNewest' },
    { label: 'Tanggal Terlama', value: 'sortByOldest' }
  ];
  const sortMethod = useSelector((state) => state.sort.sortMethod);
  const dispatch = useDispatch();

  const _renderRadioButton = (obj, i) => (
    <RadioButton key={i}>
      <RadioButtonInput
        obj={obj}
        index={i}
        isSelected={sortMethod === obj.value}
        onPress={() => dispatch(sort({ sortMethod: obj.value }))}
        borderWidth={1}
        buttonInnerColor={Color.orange}
        buttonOuterColor={Color.orange}
        buttonWrapStyle={styles.radioButton}
      />
      <RadioButtonLabel
        obj={obj}
        index={i}
        labelHorizontal={true}
        onPress={() => dispatch(sort({ sortMethod: obj.value }))}
        labelWrapStyle={styles.radioButton}
        labelStyle={styles.radioButtonLabel}
      />
    </RadioButton>
  );

  return (
    <Modal visible={modalVisible} transparent={true}>
      <TouchableWithoutFeedback onPress={onBackDropPress}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.contentContainer}>
              <RadioForm>
                {radioProps.map((obj, i) => _renderRadioButton(obj, i))}
              </RadioForm>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SortModal;
