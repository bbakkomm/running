import React from 'react';
import { 
    Pressable, PressableProps,
    StyleSheet, View, Text, 
    Dimensions
} from 'react-native';
import { colors } from '../constants';
import { devices } from '../constants/devices';

interface CustomButtonProps extends PressableProps {
    label: string;
    variant?: 'filled' | 'outlined';
    size?: 'large' | 'medium';
    inValid?: boolean;
}

function CustomButton({
    label, 
    variant = 'filled', 
    size = 'large',
    inValid = false,
    ...props
}: CustomButtonProps) {
    return (
        <Pressable 
            disabled={inValid} 
            style={({pressed}) => [
                styles.container, 
                styles[variant], 
                pressed ? styles[`${variant}Pressed`] : styles[variant],
                inValid && styles.inValid
            ]} 
            {...props}
        >
            <View style={styles[size]}>
                <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    inValid: {
        opacity: 0.5,
    },

    // variant
    filled: {
        backgroundColor: colors.PURPLE_500,
    },
    outlined: {
        borderColor: colors.PURPLE_500,
        borderWidth: 1,
    },
    // variantPressed
    filledPressed: {
        backgroundColor: colors.PURPLE_300,
    },
    outlinedPressed: {
        borderColor: colors.PURPLE_300,
        borderWidth: 1,
        opacity: 0.5,
    },

    // size
    large: {
        width: '100%',
        paddingVertical: devices.DEVICE_SMALL ? 15 : 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    medium: {
        width: '50%',
        paddingVertical: devices.DEVICE_SMALL ? 12 : 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    text: {
        fontSize: 16,
        fontWeight: '700',
    },
    // variantText
    filledText: {
        color: colors.WHITE,
    },
    outlinedText: {
        color: colors.PURPLE_500,
    },
});

export default CustomButton;