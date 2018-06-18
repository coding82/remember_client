// import React from "react";
// import { View, Text, TouchableHighlight } from "react-native";
// import styles from "./Style";

// export default class Qt extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       num: 0
//     };

//     this.goUp = this.goUp.bind(this);
//   }

//   goUp(condition) {
//     if(condition === 'up') this.setState({num: this.state.num+=2})
//     else this.setState({num: this.state.num-=2})
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.content}>
//           <Text style={styles.title}>{this.state.num}</Text>

//           <View>
//             <TouchableHighlight
//               onPress={() => this.goUp('up')}
//               style={styles.blueButton}
//             >
//               <Text style={styles.buttonText}>Up</Text>
//             </TouchableHighlight>

//             <TouchableHighlight
//               onPress={() => this.goUp('down')}
//             >
//               <Text>Down</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
