import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { DateTime } from 'luxon';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemeContext } from "../../config/ThemeContext";

function IconButton({ icon, text, onPress }) {
  const { sizes, colors, textStyles } = useThemeContext();
  return (
    <View style={{ flex: 1, }}>
      <TouchableWithoutFeedback onPress={onPress} >
        <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
          {icon}
          <Text style={[textStyles.standard.dark, { textAlign: 'center'}]}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

function EventDetail({ events, tag, selectedEvent }) {
  const { sizes, colors, textStyles } = useThemeContext();

  console.log(selectedEvent)

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg0 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: sizes.large,
        }}
      >
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            borderColor: tag.color,
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: tag.color,
          }}
        >
          <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
            {tag.name[0] + tag.name[1]}
          </Text>
        </View>
        <Text style={[textStyles.standard.dark, { marginTop: sizes.medium }]}>
          {tag.name}
        </Text>
        <View
          style={{
            marginTop: sizes.large,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <IconButton
            icon={
              <AntDesign name="calendar" size={40} color={colors.darkText} />
            }
            onPress={() => {}}
            text={DateTime.fromJSDate(selectedEvent.date).toFormat('MMM d, yyyy\nh:mm a')}
          />
          <IconButton
            icon={
              <MaterialCommunityIcons
                name="map-marker"
                size={40}
                color={colors.darkText}
              />
            }
            onPress={() => {}}
            text={selectedEvent.address ? selectedEvent.address[0].name + '\n' + selectedEvent.address[0].city : '???'}
          />
        </View>
      </View>
    </View>
  );
}

export default EventDetail;
