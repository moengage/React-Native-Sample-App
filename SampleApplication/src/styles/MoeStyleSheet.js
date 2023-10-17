import { StyleSheet } from 'react-native';

const MOEStyles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20,
  },
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
  view: { marginBottom: 20 },
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
  inboxMainContainer: {
    paddingTop: 16,
    flex: 1,
    backgroundColor: '#CEECF5',
  },
  rowItemMainContainer: {
    marginStart: 16,
    marginEnd: 16,
    minHeight: 200,
    backgroundColor: '#f0ffff',
    padding: 10,
  },
  rowItemText: {
    padding: 10,
    fontSize: 15,
    color: 'black',
  },

  text: {
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#088A85',
    color: 'white',
  },

  buttonView: {
    padding: 10,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CEECF5',
    padding: 8,
  },
  buttonParent: {
    flexDirection: 'row',
  },
  textStyleButton: {
    padding: 12,
    color: '#088A85',
    fontWeight: 'bold',
    marginStart: 14,
    marginEnd: 14,
    fontSize: 16,
    backgroundColor: '#E6E6E6',
  }
});
export default MOEStyles;
