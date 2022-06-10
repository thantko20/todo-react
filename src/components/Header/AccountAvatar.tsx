interface Props {
  photoURL: string | null;
  displayName: string | null;
}

const AccountAvatar = ({ photoURL, displayName }: Props) => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        <img
          src={photoURL! as string}
          alt='user avatar'
          className='w-10 h-10 rounded-full'
        />
        <span className='hidden md:inline-block text-sm font-semibold text-gray-400'>
          {displayName}
        </span>
      </div>
    </>
  );
};

export default AccountAvatar;
