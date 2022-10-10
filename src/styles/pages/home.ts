import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: 'auto',
  overflow: 'hidden'
})

export const SliderContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%,  #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  width: '100%',
  minWidth: "43.5rem",
  minHeight: 656,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: "absolute",
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgb(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      strong: {
        fontSize: '$lg',
        color:"$gray100"
      },
  
      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
        display: 'block',
      },
    },

    button: {
      borderRadius: 6,
      border: 0,
      background: '$green500',
      padding: 12,
      height: 56,
      width: 56,
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      color: '$Withe',
      transition: '0.2s',
      cursor: 'pointer',
    
      svg: {
        height: 24,
        width: 24, 
      },

      '&:hover': {
        backgroundColor: '$green300',
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  } 
})