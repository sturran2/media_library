class Media {
  constructor(title){
    this._title=title
    this._ratings=[]
    this._isCheckedOut=false
  }
  get title(){
    return this._title
  }
  get ratings(){
    return this._ratings
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  set isCheckedOut(checkoutstatus){
    this._isCheckedOut=checkoutstatus
  }
  toggleCheckOutStatus(){
    this._isCheckedOut= ! this._isCheckedOut
    }
  getAverageRating(){

   let ratingsSum=this.ratings.reduce((currentSum,rating)=> currentSum+rating,0)
   const lengthofArray=this._ratings.length
   return ratingsSum/lengthofArray
  }
  addRating(rating){
    this._ratings.push(rating)
  }
  }

//new book class
class Book extends Media {
  constructor(author,title,pages){
    super(title)
    this._author=author
    this._pages=pages
  }
  get author(){
    return this._author
  }
  get pages(){
    return this._pages
  }
  }

class Movie extends Media{
  constructor(director, title, runTime){
    super(title)
    this._director=director
    this._runTime=runTime
  }
  get director(){
    return this.director
  }
  get runTime(){
    return this._runTime
  }
}

historyOfEverything=new Book('Bill Bryson','A Short History of Nearly Everything', 544)


speed=new Movie('Jan de Bont', 'Speed', 116)

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())


/*let testMedia=new Media("testcase")
testMedia.addRating(5)
testMedia.addRating(15)
console.log(testMedia.getAverageRating())


historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(3)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())



suggestions for future:
add more properties for each class
create cd class
in add rating make sure it is between 1-5
shuffle method for CD
catalog class that holds all the media items in the library
*/