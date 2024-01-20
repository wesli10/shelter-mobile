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

interface GameState {
  word: string;
  guessedLetters: string[];
}

export function Forca() {
  const [gameState, setGameState] = useState<GameState>({
    word: "",
    guessedLetters: [],
  });
  const { navigate } = useNavigation();

  async function getWord() {
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    const formatedString = removeAcento(selectedWord);
    setGameState((prevState) => ({
      ...prevState,
      word: formatedString.toLocaleUpperCase(),
    }));
  }

  useFocusEffect(
    useCallback(() => {
      getWord();
    }, [])
  );

  function handleClick(letter: string) {
    if (gameState.guessedLetters.includes(letter)) {
      return;
    }

    setGameState((prevState) => ({
      ...prevState,
      guessedLetters: [...prevState.guessedLetters, letter],
    }));
  }

  const incorrectGuesses = gameState.guessedLetters.filter(
    (letter) => !gameState.word.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner =
    gameState.word !== "" &&
    gameState.word
      .split("")
      .every((letter) => gameState.guessedLetters.includes(letter));

  useEffect(() => {
    if (isLoser) {
      setGameState({ word: "", guessedLetters: [] });
      navigate("loserScene", { word: gameState.word });
    }

    if (isWinner) {
      setGameState({ word: "", guessedLetters: [] });
      navigate("winnerScene");
    }
  }, [isLoser, isWinner]);

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <View className="mt-14">
        <GallowsMan numberOfGuesses={incorrectGuesses.length} />
        <GallowsWord
          guessedLetters={gameState.guessedLetters}
          word={gameState.word}
        />
        <View className="flex flex-wrap flex-row items-center gap-3 mt-16 justify-center ">
          {Keys.map((letter) => (
            <TouchableOpacity
              key={letter}
              className={clsx(
                "border-2 border-violet-500 rounded-md w-10 h-10",
                {
                  ["border-zinc-700"]:
                    gameState.guessedLetters.includes(letter),
                }
              )}
              onPress={() => handleClick(letter)}
            >
              <Text
                className={clsx("text-lg color-white text-center font-bold ", {
                  ["color-zinc-700"]: gameState.guessedLetters.includes(letter),
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
