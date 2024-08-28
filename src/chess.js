import React from 'react'
import { FaChessKing } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { FaChessRook } from "react-icons/fa";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";

function Chess() {
  return (
    <div className='tot'>
        <div className='one'>
            <div className='white'>
            <FaChessRook className='icon'/>
            </div>
            <div className='black'>
            <FaChessKnight className='icon'/>
            </div>
            <div className='white'>
            <FaChessBishop className='icon'/>
            </div>
            <div className='black'>
            <FaChessKing className='icon' />
            </div>
            <div className='white'>
            <FaChessQueen className='icon'/>
            </div>
            <div className='black'>
            <FaChessBishop className='icon' />   
            </div>
            <div className='white'>
            <FaChessKnight className='icon' />
            </div>
            <div className='black'>
            <FaChessRook className='icon' />
            </div>

        </div>
        <div className='two'>
            <div className='black'>
            <FaChessPawn className='icon'/>
            </div>
            <div className='white'>
            <FaChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaChessPawn className='icon'/>
            </div>
            <div className='white'>
            <FaChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaChessPawn className='icon'/>
            </div>
            <div className='white'>
            <FaChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaChessPawn className='icon'/> 
            </div>
            <div className='white'>
            <FaChessPawn className='icon'/>
            </div>
           

        </div>
        <div className='one'>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>

        </div>
        <div className='two'>
            <div className='black'>
                
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
           

        </div>
        <div className='one'>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>

        </div>
        <div className='two'>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
            <div className='black'>
                 
            </div>
            <div className='white'>

            </div>
           

        </div>
        <div className='one'>
            <div className='white'>
            <FaRegChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessPawn className='icon'/>
            </div>
            <div className='white'>
            <FaRegChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessPawn className='icon' />
            </div>
            <div className='white'>
            <FaRegChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessPawn className='icon'/>
            </div>
            <div className='white'>
            <FaRegChessPawn className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessPawn className='icon'/>
            </div>

        </div>
        <div className='two'>
            <div className='black'>
            <FaRegChessRook className='icon' />
            </div>
            <div className='white'>
            <FaRegChessKnight className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessBishop className='icon'/>  
            </div>
            <div className='white'>
            <FaRegChessQueen className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessKing className='icon'/> 
            </div>
            <div className='white'>
            <FaRegChessBishop className='icon'/>
            </div>
            <div className='black'>
            <FaRegChessKnight className='icon'/>  
            </div>
            <div className='white'>
            <FaRegChessRook className='icon'/>
            </div>
           

        </div>
           

       
    </div>
  )
}

export default Chess


// function ChessPiece({ color, type }) {
//     let iconComponent;
  
//     // Use logical conditions to check the type of piece and render the appropriate icon
//     if (type === 'king') {
//       iconComponent = color === 'white' ? <FaChessKing className='icon' /> : <FaRegChessKing className='icon' />;
//     } else if (type === 'queen') {
//       iconComponent = color === 'white' ? <FaChessQueen className='icon' /> : <FaRegChessQueen className='icon'/>;
//     }
//     // Add similar logic for other pieces
  
//     return (
//       <div className={color}>
//         {iconComponent}
//       </div>
//     );
//   }
  
//   function Chess() {
//    return (
//      // Render the chessboard using the ChessPiece component with logical conditions
//      <>
//        {/* White pieces */}
//        {[['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 
//           'knight', `rook`].map((piece, index) => 
//            (<ChessPiece key={`white-${index}`} color="white" type={piece} />)
//          )]}
       
//        {/* White pawns */}
//        {Array(8).fill(null).map((_, index) => 
//           (<ChessPiece key={`white-pawn-${index}`} color="white" type="pawn" />)
//         )}
  
//         {/* Black pawns */}
//         {Array(8).fill(null).map((_, index) => 
//            (<ChessPiece key={`black-pawn-${index}`} color="black" type="pawn" />)
//          )}
  
//          {/* Black pieces */}
//          {[['rook', 'knight', `bishop`, `queen`, `king`, `bishop`,
//             `knight`,`rook`].map((piece, index) => 
//             (<ChessPiece key={`black-${index}`} color="black" type={piece} />)
//           )]}
//      </>
//    );
//   }
//   export default ChessPiece