import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode}=useTheme();
  return (
    <View style={styles.container}>
     
      <Text>
        hi

      </Text>

     <TouchableOpacity onPress={toggleDarkMode} >
      <Text>Toggle Mode</Text>
     </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
});
