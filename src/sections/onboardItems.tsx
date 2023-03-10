import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export const onboardItems = () => {
  return (
    <View style={styles.slideContainer} key={slide.key}>
        <Text style={styles.title}numberOfLines={2} ellipsizeMode='clip'>{slide.title}</Text>
        <Text style={styles.text}numberOfLines={2} ellipsizeMode='clip'>{slide.text}</Text>
        <View style={styles.sliderDots}>
        {slides.map((_, i) => (
            <TouchableOpacity
            key={i}
            style={[
                styles.sliderDot,
                i === activeSlide ? styles.activeSliderDot : null,
            ]}
            onPress={() => handlePress(i)}
            />
        ))}
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
    </View>
  )
}
