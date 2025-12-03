import { useState } from 'react';
import type { SceneCharacter } from '../data/characters';
import { getCharacter } from '../data/characters';
import './Character.css';

interface CharacterDisplayProps {
  characters: SceneCharacter[];
}

interface SingleCharacterProps {
  character: SceneCharacter;
}

function SingleCharacter({ character }: SingleCharacterProps) {
  const [imageError, setImageError] = useState(false);
  const charData = getCharacter(character.characterId);

  if (!charData) return null;

  const imageSrc = character.expression
    ? charData.images[character.expression] || charData.images.default
    : charData.images.default;

  const handleError = () => {
    setImageError(true);
  };

  if (imageError) {
    // 画像がない場合はプレースホルダーを表示
    return (
      <div
        className={`character character-${character.position}`}
        style={{ opacity: character.opacity ?? 1 }}
      >
        <div className="character-placeholder">
          <div className="placeholder-silhouette"></div>
          <span className="placeholder-name">{charData.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`character character-${character.position}`}
      style={{ opacity: character.opacity ?? 1 }}
    >
      <img
        src={imageSrc}
        alt={charData.name}
        className="character-image"
        onError={handleError}
      />
    </div>
  );
}

export function CharacterDisplay({ characters }: CharacterDisplayProps) {
  if (characters.length === 0) return null;

  return (
    <div className="character-layer">
      {characters.map((char, index) => (
        <SingleCharacter key={`${char.characterId}-${index}`} character={char} />
      ))}
    </div>
  );
}
