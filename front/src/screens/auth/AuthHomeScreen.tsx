import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigtor';
import { authNavigations } from '../../constants';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<
    AuthStackParamList,
    typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.imageContainer}>
                    <Image 
                        resizeMode='contain'
                        style={styles.image} 
                        source={require('../../assets/logo.png')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton 
                        label='로그인하기' 
                        onPress={() => navigation.navigate(authNavigations.LOGIN)} 
                    />
                    <CustomButton 
                        label='회원가입하기' 
                        variant='outlined'
                        onPress={() => navigation.navigate(authNavigations.SIGNUP)} 
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#200C36'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    imageContainer: {
        flex: 1.5,
        width: Dimensions.get('screen').width / 1.2,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        gap: 10
    },
});

export default AuthHomeScreen;