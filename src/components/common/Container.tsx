import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

interface ContainerProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  footer: React.ReactNode | string;
}

const Container = ({ title, children, icon, footer }: ContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.divider} />
      {children}
      <View style={styles.divider} />
      {typeof footer === 'string' ? (
        <Text style={styles.footerText}>{footer}</Text>
      ) : (
        footer
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
  },
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#3D3D3E',
    flex: 1,
    borderRadius: 4
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 8,
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
});