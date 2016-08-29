import { hands as rawHands} from './hands'
import { HandRankSearch as getHandRank} from './BS/ts/classes/hands/_handreading'
import { HandClass, Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams, HighCardParams
  , SearchesOnceAndRemembers } from './BS/ts/classes/hands/_interfaces'

let hands: string[] = rawHands.split('\n')

let p1Wins = 0;
let p2Wins = 0;

for (let handsLine of hands) {
  let p1CardString = handsLine.slice(0, 14)
  let p2CardString = handsLine.slice(15)
  
  let p1Cards = collectCards(p1CardString)
  let p2Cards = collectCards(p2CardString)

  let p1Hand = new getHandRank(p1Cards).result
  let p2Hand = new getHandRank(p2Cards).result

  let compare = p1Hand.compareTo(p2Hand);
  (compare === 1) ? p1Wins++ : p2Wins++
}
  console.log(p1Wins)
  console.log(p2Wins)

function collectCards(cardString:string): Card[] {
  let cardsArray = cardString.split(' ');
  let cards: Card[] = [];
  
  for(let handLike of cardsArray) {
	let [suit, valueLike] = [handLike[1], handLike[0]];
	  cards.push(
		  {
			  value: convertToValue(valueLike),
			  suit: suitCast(suit)
		  }
	  ) 
  }
  return cards;
}

function convertToValue(valueLike:string):number {
  if (valueLike === 'T') return 10
  if (valueLike === 'J') return 11;
  if (valueLike === 'Q') return 12;
  if (valueLike === 'K') return 13;
  if (valueLike === 'A') return 14;
  return +valueLike;
}

function suitCast(suitLike: string): Suit {

	let isSuit = ['S', 'D', 'C', 'H'].some(s => s === suitLike)
	if (!isSuit) throw new Error('incorrect suit shortcut')
	return <any>suitLike
}