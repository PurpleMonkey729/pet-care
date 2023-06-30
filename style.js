import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 320;
const guidelineBaseHeight = 568;

export const resw = (size) => (width / guidelineBaseWidth) * size;
export const resh = (size) => (height / guidelineBaseHeight) * size;
export const resm = (size, factor = 0.5) => size + (resw(size) - size) * factor;
export const sp_mode = width < 768;

export const css = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});