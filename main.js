//  let story =  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
//  const storyWords = story.split(" ");

//  let one = ['Last', 'weekend', 'I', 'took', 'literally', 'the', 'most', 'beautiful', 'bike', 'ride', 'of', 'my', 'life.', 'The', 'route', 'is', 'called', '"The', '9W', 'to', 'Nyack"', 'and', 'it', 'actually', 'stretches', 'all', 'the', 'way', 'from', 'Riverside', 'Park', 'in', 'Manhattan', 'to', 'South', 'Nyack,', 'New', 'Jersey.', "It's", 'really', 'an', 'adventure', 'from', 'beginning', 'to', 'end!', 'It', 'is', 'a', '48', 'mile', 'loop', 'and', 'it', 'basically', 'took', 'me', 'an', 'entire', 'day.', 'I', 'stopped', 'at', 'Riverbank', 'State', 'Park', 'to', 'take', 'some', 'extremely', 'artsy', 'photos.', 'It', 'was', 'a', 'short', 'stop,', 'though,', 'because', 'I', 'had', 'a', 'really', 'long', 'way', 'left', 'to', 'go.', 'After', 'a', 'quick', 'photo', 'op', 'at', 'the', 'very', 'popular', 'Little', 'Red', 'Lighthouse,'];
//  let two =  ['I', 'began', 'my', 'trek', 'across', 'the', 'George', 'Washington', 'Bridge', 'into', 'New', 'Jersey.', '', 'The', 'GW', 'is', 'actually', 'very', 'long', '-', '4,760', 'feet!', 'I', 'was', 'already', 'very', 'tired', 'by', 'the', 'time', 'I', 'got', 'to', 'the', 'other', 'side.', '', 'An', 'hour', 'later,', 'I', 'reached', 'Greenbrook', 'Nature', 'Sanctuary,', 'an', 'extremely', 'beautiful', 'park', 'along', 'the', 'coast', 'of', 'the', 'Hudson.', '', 'Something', 'that', 'was', 'very', 'surprising', 'to', 'me', 'was', 'that', 'near', 'the', 'end', 'of', 'the', 'route', 'you', 'actually', 'cross', 'back', 'into', 'New', 'York!', 'At', 'this', 'point,', 'you', 'are', 'very', 'close', 'to', 'the', 'end.'];
//  const storyWords = one.concat(two);
//  console.log(storyWords);
//  Original number of words in story = 189

//  const indices = [];
const storyWords = ['Last', 'weekend', 'I', 'took', 'literally', 'the', 'most', 'beautiful', 'bike', 'ride', 'of', 'my', 'life.', 'The', 'route', 'is', 'called', '"The', '9W', 'to', 'Nyack"', 'and', 'it', 'actually', 'stretches', 'all', 'the', 'way', 'from', 'Riverside', 'Park', 'in', 'Manhattan', 'to', 'South', 'Nyack,', 'New', 'Jersey.', "It's", 'really', 'an', 'adventure', 'from', 'beginning', 'to', 'end!', 'It', 'is', 'a', '48', 'mile', 'loop', 'and', 'it', 'basically', 'took', 'me', 'an', 'entire', 'day.', 'I', 'stopped', 'at', 'Riverbank', 'State', 'Park', 'to', 'take', 'some', 'extremely', 'artsy', 'photos.', 'It', 'was', 'a', 'short', 'stop,', 'though,', 'because', 'I', 'had', 'a', 'really', 'long', 'way', 'left', 'to', 'go.', 'After', 'a', 'quick', 'photo', 'op', 'at', 'the', 'very', 'popular', 'Little', 'Red', 'Lighthouse', 'I', 'began', 'my', 'trek', 'across', 'the', 'George', 'Washington', 'Bridge', 'into', 'New', 'Jersey.', '', 'The', 'GW', 'is', 'actually', 'very', 'long', '-', '4,760', 'feet!', 'I', 'was', 'already', 'very', 'tired', 'by', 'the', 'time', 'I', 'got', 'to', 'the', 'other', 'side.', '', 'An', 'hour', 'later,', 'I', 'reached', 'Greenbrook', 'Nature', 'Sanctuary,', 'an', 'extremely', 'beautiful', 'park', 'along', 'the', 'coast', 'of', 'the', 'Hudson.', '', 'Something', 'that', 'was', 'very', 'surprising', 'to', 'me', 'was', 'that', 'near', 'the', 'end', 'of', 'the', 'route', 'you', 'actually', 'cross', 'back', 'into', 'New', 'York!', 'At', 'this', 'point,', 'you', 'are', 'very', 'close', 'to', 'the', 'end.'];


for (var i = storyWords.length - 1; i >= 0; i--) {
    if (storyWords[i] === "literally" || storyWords[i] === "extremely" || storyWords[i] === "actually") { 
        storyWords.splice(i, 1);
    }
  }
//  console.log(storyWords);
//  New # of words in story = 182
//  let overusedWords = ['really', 'very', 'basically'];
// function overUsed(storyWords) {
//   return storyWords.some( function(overUsedWords) {
//       return storyWords.indexOf(overUsedWords) !== storyWords.lastIndexOf(overUsedWords);
//       console.log(overUsedWords);
//   });
  
  // const counts = {};
  
  // for (const word of storyWords) {
  //   counts[word] = counts[word] ? counts[word] + 1 : 1;
  // }

  // console.log(counts['really'], counts['very'], counts['basically']);
  // //  instances of 'really' = 2; instances of 'very' = 5; instances of 'basically' = 1
//  Number of instances of overUsedWords === 8
//   
// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }
// console.log(filterItems(storyWords, '!'))
// console.log(filterItems(storyWords, '.'))


 // Our story has 12 sentences that end in either ! or .

//  let betterWords = storyWords.toString();
//  console.log(betterWords);

 // The .toString method kept the array qualities, so instead I used .join to create a single string).  

 function frequent(number){
    var count = 0;
    var sortedNumber = number.sort();
    var start = number[0], item;
    for(var i = 0 ;  i < sortedNumber.length; i++){
      if(start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i+1]){
         item = sortedNumber[i]
      }
    }
    return item
  
}

console.log( frequent(['Last', 'weekend', 'I', 'took', 'literally', 'the', 'most', 'beautiful', 'bike', 'ride', 'of', 'my', 'life.', 'The', 'route', 'is', 'called', '"The', '9W', 'to', 'Nyack"', 'and', 'it', 'actually', 'stretches', 'all', 'the', 'way', 'from', 'Riverside', 'Park', 'in', 'Manhattan', 'to', 'South', 'Nyack,', 'New', 'Jersey.', "It's", 'really', 'an', 'adventure', 'from', 'beginning', 'to', 'end!', 'It', 'is', 'a', '48', 'mile', 'loop', 'and', 'it', 'basically', 'took', 'me', 'an', 'entire', 'day.', 'I', 'stopped', 'at', 'Riverbank', 'State', 'Park', 'to', 'take', 'some', 'extremely', 'artsy', 'photos.', 'It', 'was', 'a', 'short', 'stop,', 'though,', 'because', 'I', 'had', 'a', 'really', 'long', 'way', 'left', 'to', 'go.', 'After', 'a', 'quick', 'photo', 'op', 'at', 'the', 'very', 'popular', 'Little', 'Red', 'Lighthouse', 'I', 'began', 'my', 'trek', 'across', 'the', 'George', 'Washington', 'Bridge', 'into', 'New', 'Jersey.', '', 'The', 'GW', 'is', 'actually', 'very', 'long', '-', '4,760', 'feet!', 'I', 'was', 'already', 'very', 'tired', 'by', 'the', 'time', 'I', 'got', 'to', 'the', 'other', 'side.', '', 'An', 'hour', 'later,', 'I', 'reached', 'Greenbrook', 'Nature', 'Sanctuary,', 'an', 'extremely', 'beautiful', 'park', 'along', 'the', 'coast', 'of', 'the', 'Hudson.', '', 'Something', 'that', 'was', 'very', 'surprising', 'to', 'me', 'was', 'that', 'near', 'the', 'end', 'of', 'the', 'route', 'you', 'actually', 'cross', 'back', 'into', 'New', 'York!', 'At', 'this', 'point,', 'you', 'are', 'very', 'close', 'to', 'the', 'end.']))
// Most frequently used word in our story is "you".  
