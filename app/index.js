import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.centered}>
      <Link href="/p1">Página 1</Link>
      <Link href="/p2">Página 2</Link>
      <Link href="/p3">Página 3</Link>
      <Link href="/p4">Página 4</Link>
      <Link href="/p5">Página 5</Link>      
    </View>
  );
}

const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });