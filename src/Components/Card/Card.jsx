import './Card.css'
import  rangeIconBeginner from './ImgCard/range.svg'
import  rangeIconIntermediate from './ImgCard/range1.svg'
import  rangeIconMaster from './ImgCard/range2.svg'
const Card = (props) => {
   const {
      img,
      title,
      author,
      students,
      level,
      rating,
      duration,
      modules,
   }
    = props;

    let rangeIcon ;
      
    if(level === 'Intermediate'){
      rangeIcon = rangeIconIntermediate;
    }else if(level === 'Master'){
      rangeIcon = rangeIconMaster;
    }else{
      rangeIcon = rangeIconBeginner;
    }
   
  
   return <div className="container">
              <div className="card">
                <div className="card__image">
                <img src={img} alt="Error" />
                   <span className="card__image-level">{level}
                   <span className='card__image-level-range'><img src={rangeIcon} alt="RangeMustBe" /></span></span>
                </div>
               <div className="card__content">
                <div className="card__title">{title} </div>
                <div className="card__author">
                  <div className="card__author-name">{author}</div>
                  <div className="card__author-rating">{rating}</div>
                </div>
                <div className="card__info">
                  <div className="card__info-members">{students}</div>
                  <div className="card__info-moduls">{modules}</div>
                  <div className="card__info-hours">{duration}</div>
                </div>
              </div>
              </div>
          </div>
      
   

}

export default Card;