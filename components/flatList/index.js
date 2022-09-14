import React from "react";
import { styles } from "./styles";

const {style, data,  renderItem, keyExtractor, showsVerticalScrollIndicator} = props;

const FlatList = () => {
  return (
    <FlatList
      style={styles.itemList}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default { FlatList };
