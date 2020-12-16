import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Txt from '../../components/Txt';

const InviteView = ({ email, setEmail, sendInvitation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Txt styles={styles.title}>
          Invite members of your family to join the Sodie Family on Cherished
        </Txt>

        <View style={styles.input}>
          <Input
            labelText="email"
            placeholder="example@email.com"
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </View>

        <Button
          text="Send invitation"
          onPress={sendInvitation}
        />

      </View>
    </View>
  );
};

export default InviteView;
