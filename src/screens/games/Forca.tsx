import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import GallowsWord from "../../components/GallowsWord";
import GallowsMan from "../../components/GallowsMan";
import { Keys } from "../../utils/constants";
import clsx from "clsx";
import { removeAcento } from "../../utils/utils";
import { words } from "../../utils/words";

export function Forca() {
  const [word, setWord] = useState<string>("");
  const { navigate } = useNavigation();
  const [guessedLetters, setGuesseLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  async function getWord() {
    const selectedWord = words[Math.floor(Math.random() * words.length)];

    const formatedString = removeAcento(selectedWord);
    setWord(formatedString.toLocaleUpperCase());
  }

  useFocusEffect(
    useCallback(() => {
      getWord();
    }, [])
  );

  function addGuesseLetters(letter: string) {
    if (guessedLetters.includes(letter)) return;

    setGuesseLetters((guessedLetters) => [...guessedLetters, letter]);
  }

  function handleClick(lettler: string) {
    const key = lettler;

    if (!key.match(/^[A-Z]$/)) return;

    addGuesseLetters(key);
  }

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner =
    word !== "" &&
    word.split("").every((letter) => guessedLetters.includes(letter));
  console.log(word);

  if (isLoser) {
    setWord("");
    setGuesseLetters([]);
    navigate("loserScene", { word: word });
  }

  if (isWinner) {
    setWord("");
    setGuesseLetters([]);
    navigate("winnerScene");
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header title="Jogo da Forca" />
      <View className="mt-14">
        <GallowsMan numberOfGuesses={incorrectGuesses.length} />
        <GallowsWord guessedLetters={guessedLetters} word={word} />
        <View className="flex flex-wrap flex-row items-center gap-3 mt-16 justify-center ">
          {Keys.map((letter) => (
            <TouchableOpacity
              key={letter}
              className={clsx(
                "border-2 border-violet-500 rounded-md w-10 h-10",
                {
                  ["border-zinc-700"]: guessedLetters.includes(letter),
                }
              )}
              onPress={() => handleClick(letter)}
            >
              <Text
                className={clsx("text-lg color-white text-center font-bold ", {
                  ["color-zinc-700"]: guessedLetters.includes(letter),
                })}
                key={letter}
              >
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
