import { Text, View } from "react-native";

interface GallowsManProps {
  numberOfGuesses: number;
}

const Base = () => <View className="h-2 w-60 bg-white right-2 "></View>;

const VerticalLine = () => <View className="h-48 w-2 bg-white mr-32"></View>;

const HorizontalLine = () => (
  <View className="h-2 w-24 bg-white absolute right-32 top-0"></View>
);

const VerticalLineSmall = () => (
  <View className="absolute h-10 w-2 bg-white mr-16"></View>
);

const Head = () => (
  <View className="h-10 w-10 rounded-full border-4 border-white absolute top-10"></View>
);

const Body = () => (
  <View className="h-14 w-2  border-white bg-white absolute top-20"></View>
);

const RightArm = () => (
  <View className="h-12 w-2 bg-white absolute top-16 right-36 rotate-45"></View>
);

const LeftArm = () => (
  <View className="h-12 w-2 bg-white absolute top-16 right-44 -rotate-45"></View>
);

const RightLeg = () => (
  <View className="h-11 w-2 bg-white absolute top-32 right-44 rotate-45"></View>
);

const LeftLeg = () => (
  <View className="h-11 w-2 bg-white absolute top-32 right-36 -rotate-45"></View>
);

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

export default function GallowsMan({ numberOfGuesses }: GallowsManProps) {
  return (
    <View className="relative flex flex-col items-center">
      {bodyParts.slice(0, numberOfGuesses).map((BodyPart, index) => {
        return <BodyPart key={index} />;
      })}
      <VerticalLineSmall />
      <HorizontalLine />
      <VerticalLine />
      <Base />
    </View>
  );
}
