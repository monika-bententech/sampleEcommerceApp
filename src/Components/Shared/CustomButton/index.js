import React from "react";

return default ({ label, style }) => {
  return (
    <Pressable style={{
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      backgroundColor: "#FF499E",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 7,
      borderRadius: 9,
    }}>
      <Text style={{ color: "white", fontWeight: "500" }}>{label}</Text>
    </Pressable>)
}
