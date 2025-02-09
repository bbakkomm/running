import React from 'react';
import { 
    Pressable, PressableProps,
    StyleSheet, View, Text, 
    Dimensions
} from 'react-native';
import { colors } from '../constants';

interface CustomButtonProps extends PressableProps {
    label: string;
    variant?: 'filled' | 'outlined';
    size?: 'large' | 'medium';
    inValid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

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
                styles[size], 
                pressed ? styles[`${variant}Pressed`] : styles[variant],
                inValid && styles.inValid
            ]} 
            {...props}
        >
            <Text 
                style={[styles.text, styles[`${variant}Text`]]}
            >{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        justifyContent: 'center',
    },
    inValid: {
        opacity: 0.5,
    },

    // variant
    filled: {
        backgroundColor: colors.PURPLE_700,
    },
    outlined: {
        borderColor: colors.PURPLE_700,
        borderWidth: 1,
    },
    // variantPressed
    filledPressed: {
        backgroundColor: colors.PURPLE_500,
    },
    outlinedPressed: {
        borderColor: colors.PURPLE_700,
        borderWidth: 1,
        opacity: 0.5,
    },

    // size
    large: {
        width: '100%',
        paddingVertical: deviceHeight > 700 ? 15 : 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    medium: {
        width: '50%',
        paddingVertical: deviceHeight > 700 ? 12 : 8,
        alignItems: 'center',
        justifyContent: 'center',
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
        color: colors.PURPLE_700,
    },
});

export default CustomButton;