import clsx from "clsx";
import { View, Text } from "react-native";

interface GallowsWordProps {
  word: string;
  guessedLetters: string[];
}

export default function GallowsWord({
  word,
  guessedLetters,
}: GallowsWordProps) {
  return (
    <View className="flex-row justify-center align-middle gap-3 mt-4">
      {word.split("").map((letter, index) => (
        <View
          className="border-b-4 w-5 h-14 border-violet-300 items-center"
          key={index}
        >
          <Text
            className={clsx(
              "min-w-min h-14 text-zinc-200 font-extrabold text-2xl",
              {
                ["hidden"]: !guessedLetters.includes(letter),
              }
            )}
          >
            {letter.toLocaleUpperCase()}
          </Text>
        </View>
      ))}
    </View>
  );
}
