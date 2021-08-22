import React, { useState } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import styles from './SortModal.styles';

const SortModal = ({ modalVisible, onBackDropPress }) => {
  const radioProps = [
    { label: 'URUTKAN', value: '' },
    { label: 'Nama A-Z', value: 'sortByNameAsc' },
    { label: 'Nama Z-A', value: 'sortByNameDesc' },
    { label: 'Tanggal Terbaru', value: 'sortByNewest' },
    { label: 'Tanggal Terlama', value: 'sortByOldest' }
  ];
  const [selected, setSelected] = useState('');

  const _renderRadioButton = (obj, i) => (
    <RadioButton key={i}>
      <RadioButtonInput
        obj={obj}
        index={i}
        isSelected={selected === obj.value}
        onPress={() => setSelected(obj.value)}
        borderWidth={1}
        buttonInnerColor={'#50C900'}
        buttonOuterColor={'#50C900'}
        buttonWrapStyle={styles.radioButton}
      />
      <RadioButtonLabel
        obj={obj}
        index={i}
        labelHorizontal={true}
        onPress={() => setSelected(obj.value)}
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
              <Text>{selected}</Text>
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
