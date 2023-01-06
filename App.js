import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import MoreButton from "./components/MoreButton";
import CarRideButton from "./components/CarRideButton";
import StrollerButton from "./components/StrollerButton";
import WatchAShowButton from "./components/WatchAShowButton";

export default function App() {
  return (
    <View style={styles.app}>
      <FlatList
        data={itemData}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
    </View>
  );
}

const styles = {
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 1200,
  },
  item: {
    flex: 4,
    width: "25%", // 100% devided by the number of rows you want
    alignItems: "center"
  },
};

// RN Code
const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};

const itemData = [
  {
    icon: <MoreButton />,
  },
  {
    icon: <CarRideButton />,
  },
  {
    icon: <StrollerButton />,
  },
  {
    icon: <WatchAShowButton />,
  },
];
// const Container = styled(View)`
//   flex: 2;
//   width: auto;
//   marginHorizontal: "auto"
//   background-color: papayawhip;
//   justify-content: space-around;
//   align-items: center;
//   flexdirection: row;
// `;

// const Title = styled(Text)`
//   font-size: 24px;
//   font-weight: 500;
//   color: ${(props) => props.color};
// `;
