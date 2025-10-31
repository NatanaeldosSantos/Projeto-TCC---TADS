import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from "react-native-calendars";
import styles from '../styles';

export default function Dates() {
  return (
    <View style={styles.calendar}> 
      <Calendar
        onDayPress={(day) => {
          console.log("Dia selecionado:", day);
        }}
        theme={{
          backgroundColor: "#ffffffff",
          calendarBackground: "#ffffffff",
          dayTextColor: "#f38636ff",
          monthTextColor: "#f38636ff",
          selectedDayBackgroundColor: "#00FF7Aff",
          selectedDayTextColor: "#fff",
          arrowColor: "#00FF7Aff",
          todayTextColor: "#00FF7Aff",
        }}
      />
    </View>
  );
}
