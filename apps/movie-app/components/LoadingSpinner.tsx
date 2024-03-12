import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

interface Props {
    durationMs?: number
    testID?: string
}

const startRotationAnimation = (durationMs: number, rotationDegree: Animated.Value): void => {
    Animated.loop(Animated.timing(
        rotationDegree,
        {
            toValue: 360,
            duration: durationMs,
            easing: Easing.linear,
            useNativeDriver: false
        }
    )).start()
}

const LoadingSpinner = ({
    durationMs = 1000,
    testID
}: Props): JSX.Element => {
    const rotationDegree = useRef(new Animated.Value(0)).current

    useEffect(() => {
        startRotationAnimation(durationMs, rotationDegree)
    }, [durationMs, rotationDegree])

    return (
        <View style={styles.wrapper}>
            <View style={styles.container} accessibilityRole='progressbar'>
                <View style={[styles.background, styles.spinnerColor]} />

                <Animated.View
                    testID={testID}
                    style={[styles.progress, styles.animatedSpinnerColor, {
                        transform: [{
                            rotateZ: rotationDegree.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg']
                            })
                        }]
                    }]}
                />
            </View>
        </View>
    )
}

const height = 60

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 400
    },
    container: {
        width: height,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
        borderRadius: height / 2,
        borderWidth: 4,
        opacity: 0.25
    },
    progress: {
        width: '100%',
        height: '100%',
        borderRadius: height / 2,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderWidth: 4,
        position: 'absolute'
    },
    spinnerColor: {
        borderColor: 'red'
    },
    animatedSpinnerColor: {
        borderTopColor: 'red'
    }
})

export default LoadingSpinner