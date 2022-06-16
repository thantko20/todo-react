import { SAccountAvatar } from './Header.styled';

interface Props {
  photoURL: string | null;
  name: string | null;
}

const AccountAvatar = ({ photoURL, name }: Props) => {
  return (
    <SAccountAvatar>
      <img src={photoURL! as string} alt='user avatar' />
      <span>{name}</span>
    </SAccountAvatar>
  );
};

export default AccountAvatar;
