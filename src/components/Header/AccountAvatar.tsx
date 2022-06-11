import { SAccountAvatar } from './Header.styled';

interface Props {
  photoURL: string | null;
  displayName: string | null;
}

const AccountAvatar = ({ photoURL, displayName }: Props) => {
  return (
    <SAccountAvatar>
      <img src={photoURL! as string} alt='user avatar' />
      <span>{displayName}</span>
    </SAccountAvatar>
  );
};

export default AccountAvatar;
