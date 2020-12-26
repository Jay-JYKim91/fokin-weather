import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#23074d", "#cc5333"],
    title: "Smoke",
    subtitle: ""
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#fffbd5", "#b20a2c"],
    title: "Dust",
    subtitle: ""
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "Fog",
    subtitle: ""
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#CAC531", "#F3F9A7"],
    title: "Sand",
    subtitle: ""
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#800080", "#ffc0cb"],
    title: "Squall",
    subtitle: ""
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#00F260", "#0575E6"],
    title: "Tornado",
    subtitle: ""
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#6D6027", "#D3CBB8"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#3A1C71", "#FFAF7B"],
    title: "Thunderstorm",
    subtitle: ""
  },
  Drizzle: {
    iconName: "weather-partly-cloudy",
    gradient: ["#283c86", "#45a247"],
    title: "Drizzle",
    subtitle: ""
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#c0392b", "#8e44ad"],
    title: "Rain",
    subtitle: ""
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#159957", "#155799"],
    title: "Snow",
    subtitle: ""
  },
  Atmosphere: {
    iconName: "weather-cloudy",
    gradient: ["#007991", "#78ffd6"],
    title: "Atmosphere",
    subtitle: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    title: "Clear",
    subtitle: ""
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4AC29A", "#BDFFF3"],
    title: "Clouds",
    subtitle: ""
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#20002c", "#cbb4d4"],
    title: "Mist",
    subtitle: ""
  },
  Dust: {
    iconName: "weather-cloudy",
    gradient: ["#34e89e", "#0f3443"],
    title: "Dust",
    subtitle: ""
  }
};

export default function Weather({temp, condition}) {
  return (
      <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
        <StatusBar barStyles="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
          <Text style={styles.temp}>
            {temp}°C
          </Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isrequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado"
  ]).isrequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 26,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
