import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { useRouter } from 'expo-router';
import { ReactNode, useState } from 'react';

const Button = ({
  color = COLORS.gray3,
  onPress,
  children,
}: {
  color?: string;
  onPress: () => void;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity
      style={[s.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const useQuitModal = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const openModalHanlder = () => setModalVisible(true);
  const closeModalHanlder = () => setModalVisible(false);
  const quitHandler = async () => router.back();

  const QuitModal = () => (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={closeModalHanlder}
    >
      <TouchableWithoutFeedback onPress={closeModalHanlder}>
        <View style={s.conatiner}>
          <TouchableWithoutFeedback>
            <View style={s.modalContainer}>
              <Image
                style={s.modalBack}
                source={require('@assets/image/modal_back.png')}
              />
              <Text style={[{ textAlign: 'center' }, t.title3]}>
                미니게임을 종료 할까요? {'\n'} 지금 종료하면 게임 내역이
                저장되지 않아요!
              </Text>
              <View style={s.buttonList}>
                <Button onPress={closeModalHanlder}>
                  <Text style={[t.title2, { color: COLORS.black }]}>취소</Text>
                </Button>
                <Button color={COLORS.main} onPress={quitHandler}>
                  <Text style={[t.title2, { color: COLORS.white }]}>확인</Text>
                </Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return { openModalHanlder, closeModalHanlder, QuitModal };
};

export default useQuitModal;

const s = StyleSheet.create({
  conatiner: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  modalContainer: {
    width: 311,
    backgroundColor: COLORS.white,
    padding: 16,
    paddingTop: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  modalBack: {
    position: 'absolute',
    right: 0,
    top: '-100%',
  },
  buttonList: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 32,
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
