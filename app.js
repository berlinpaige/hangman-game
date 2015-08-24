
var wordsArray = ['glucose', 'hemoglobin', 'glycolysis', 'hypercapnia', 'hypertrophy', 'hypertension', 'hypoxia', 'insulin', 'ischemic', 'kilojoules', 
'kinesiology', 'krebs','lactate','myglobin', 'myosin', 'actin', 'neuron', 'overtraining', 'phosphocreatine', 'power',
'recovery','respiration','tension', 'watt', 'aerobic', 'anaerobic', 'calorie', 'cardiopulmonary', 'conditioning', 'concentric',
'essentric', 'dislipidemia', 'electrocardiogram', 'endurance', 'epidemiology', 'arrythmia', 'tachycardia', 'suraventricular', 'aortic', 'semilunar',
'bradycardia', 'ablation', 'aneurysm', 'angiotensin', 'catheter', 'arteries', 'windgate', 'brachialis', 'soleus', 'digitalis'];

var guessCount = 0;
var guessesLeft = 10;
var guessedArray =[];
var wordToGuess = "";
var underscores = ""; 



$('.getAnswerButton').hide();

//show an empty hangman image
if(guessCount === 0){
  $('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10').hide();
}




function init(){
    

         $('.newWordButton').click(function(){
              //reset letter button background colors
              $('.letter').css({"background-color" : "white"});
               
              //randmoly choose word from words array and convert letters to '-'s 
               wordToGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase();
               underscores = wordToGuess.replace(/\w/g, "-");
               
               //add underscores to beneath the buttons
               $('.empty').append(underscores);
               
               //manipulate buttons
               $('.newWordButton').hide();
               $('.getAnswerButton').show();

          });

             
         $('.getAnswerButton').click(function(){
               $('.answer').append("The word was: " + wordToGuess);
          });


            
         $('.letter').click(function(e){
                   var pressedLetter = e.target.innerHTML;  //change to this for keypress: var pressedLetter = String.fromCharCode(e.which);
                    
                    //indicate letter has already been pressed              
                    $(this).css({"background-color" : "lightblue"});

                    var doesLetterMatch = wordToGuess.indexOf(pressedLetter);
                  
                    
                    if (doesLetterMatch === -1){
                        guessCount++;
                        guessesLeft--;
                        guessedArray.push(pressedLetter);
                        $('.guessedLetters').append(pressedLetter);
                    }else{               
                        underscores = underscores.split('').map(function(char, index){
                            return wordToGuess[index] === pressedLetter ? pressedLetter : char;
                        }).join('');

                        $('.empty').text(underscores);              
                    }

                     
                     $('h5').text('You have ' + guessesLeft + ' guesses left');
                            
                      
                      //change hangman photos based on incorrect answer
                      if(guessCount === 1){
                        $('.1').show();
                        $('.0, .2, .3, .4, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 2){
                        $('.2').show();
                        $('.0, .1, .3, .4, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 3){
                        $('.3').show();
                        $('.0, .1, .2, .4, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 4){
                        $('.4').show();
                        $('.0, .1, .2, .3, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 5){
                        $('.5').show();
                        $('.0, .1, .2, .3, .4, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 6){
                        $('.6').show();
                        $('.0, .1, .2, .3, .4, .5, .7, .8, .9, .10').hide();
                      }else if(guessCount === 7){
                        $('.7').show();
                        $('.0, .1, .2, .3, .4, .5, .6, .8, .9, .10').hide();
                      }else if(guessCount === 8){
                        $('.8').show();
                        $('.0, .1, .2, .3, .4, .5, .6, .7, .9, .10').hide();
                      }else if(guessCount === 9){
                        $('.9').show();
                        $('.0, .1, .2, .3, .4, .5, .6, .7, .8, .10').hide();
                      }


                     if (guessCount === 10){
                         confirm("Sorry, you have lost the game! The word you were trying to guess was: " + wordToGuess + "! Do you want to play again?")
                         
                         //disable ability to click letters
                         $('.letter').off();
                         $('.answer').append("The word was: " + wordToGuess);

                         //edit photo
                         $('.10').show();
                         $('.0, .1, .2, .3, .4, .5, .6, .7, .8, .19').hide();           
                      }
                    
                      
                      //when player guesses all letters correctly
                      if(wordToGuess === underscores){
                          alert("Congratulations! You guessed the word! I bet you want to play again!")
                          $('.letter').off();
                       }            

         });
    
}




$(document).ready(init);


