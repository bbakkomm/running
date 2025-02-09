import { Dimensions } from "react-native";

const devices = {
    DEVICE_SMALL: Dimensions.get('screen').height > 700,
}

export {devices};