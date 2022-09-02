import {StyleSheet} from 'react-native';

const MOEStyles = StyleSheet.create({
  title: {
    padding: 12,
    marginTop: 20,
    color: '#088A85',
    fontWeight: 'bold',
    marginStart: 14,
    marginEnd: 14,
    fontSize: 16,
    backgroundColor: '#E6E6E6',
  },
  view: {marginBottom: 20},
  selfHandledContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
  selfHandledTextLabels: {
    textAlign: 'left',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  selfHandledTextValues: {
    fontSize: 16,
    color: 'white',
    paddingEnd: 40,
    marginEnd: 40,
  },
  selfHandledButtonContainer: {
    flexDirection: 'row',
    height: 50,
    marginTop: 18,
    marginBottom: 18,
    justifyContent: 'space-between',
  },
  selfHandledButton: {
    flex: 1,
    margin: 8,
    height: 50,
    backgroundColor: '#D7DF01',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
  },
  selfHandledButtonText: {
    textAlign: 'center',
    color: '#424242',
    fontWeight: 'bold',
  },
  selfHandledModal: {
    elevation: 5,
    backgroundColor: '#088A85',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 100,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 100,
    alignSelf: 'center',
    width: '90%',
  },
});
export default MOEStyles;
