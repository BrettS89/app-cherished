import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { ON_REGISTER } from '../../../redux/actions';
import colors from '../../../shared/styles/colors';
import Input from '../../../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    dispatch({ type: ON_REGISTER, payload: { form: { email, password }, navigate } });
  };

  const navigate = () => {
    navigation.navigate('Albums');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Input
          labelText="email"
          placeholder="Email"
          onChangeText={setEmail}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          labelText="password"
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          onSubmitHandler={onSubmit}
        />
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          {/* <View style={styles.buttonBackground}> */}
            <Icon name="arrow-right-circle" size={60} color={colors.main} />
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

