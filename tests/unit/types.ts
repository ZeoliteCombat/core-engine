// types.ts

// Define namespace for the core engine
namespace core {

  // Define a type alias for the game object identifier
  type ObjectId = string;

  // Define a type alias for the game object properties
  interface Properties {
    id: ObjectId;
    name: string;
    description: string;
    health: number;
    mana: number;
  }

  // Define a type alias for the game object
  interface GameObject {
    type: 'character' | 'item' | 'location';
    properties: Properties;
  }

  // Define a type alias for the game event
  type GameEvent =
    | 'playerMovement'
    | 'playerAttack'
    | 'playerUseItem'
    | 'playerLevelUp';

  // Define a type alias for the game state
  interface GameState {
    currentEvent: GameEvent;
    gameObjects: { [id: ObjectId]: GameObject };
    player: {
      id: ObjectId;
      properties: Properties;
    };
  }

  // Define a type alias for the game update function
  type UpdateFunction = (state: GameState, event: GameEvent) => GameState;
}

export { core };