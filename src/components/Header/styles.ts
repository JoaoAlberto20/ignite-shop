import { styled } from "../../styles";

export const HeaderContainer = styled('header',{
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonCartContainer = styled('button', {
  borderRadius: 6,
  border: 0,
  background: '$gray800',
  padding: 12,
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray300',
  cursor: 'pointer',
  position: 'relative',
  marginLeft: "auto",

  svg: {
    height: 24,
    width: 24, 
  },

  span: {
    position: 'absolute',
    width: '1.6rem',
    height: '1.6rem',
    right: -7,
    top: -7,
    borderRadius: '50%',
    border: '3px solid #121214',
    background: '$green500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '0.875rem',
    fontWeight: 'bold',
  }
})