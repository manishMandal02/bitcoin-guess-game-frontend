import LoadingSpinner from '@components/ui/LoadingSpinner'
import React from 'react'

interface Props {
  title: string
  username: string
  onChange: (username: string) => void
  isUserNameAvailable: boolean
  isNewUser: boolean
  isLoading?: boolean
}

const InputBoxWithMessage: React.FC<Props> = ({
  title,
  username,
  onChange,
  isUserNameAvailable,
  isNewUser,
  isLoading,
}) => {
  return (
    <div className="relative mt-10 mb-8">
      <p className="mb-px text-lg  text-slate-100">{title}</p>
      <input
        spellCheck={false}
        type="text"
        value={username}
        maxLength={18}
        placeholder="Enter username"
        className={` rounded py-1.5 px-4 text-lg text-black placeholder:select-none placeholder:text-base`}
        onChange={(e) => {
          onChange(e.target.value.replace(/\s/g, ''))
        }}
      />
      {isLoading && (
        <div className="absolute top-10 ">
          <LoadingSpinner size={5} />
        </div>
      )}
      {/* error or info message based on user input */}
      {!isLoading && (
        <>
          {isNewUser ? (
            // Message for new users
            <p
              className={`absolute mt-1 ml-1.5 text-sm  ${
                username.length > 3 && isUserNameAvailable
                  ? '  text-emerald-400'
                  : 'text-red-400'
              }`}
            >
              {username.length < 4 &&
                username.length > 0 &&
                'Minimum 3 characters'}
              {username.length > 3 && isUserNameAvailable
                ? 'Username is available'
                : username.length > 3 && !isUserNameAvailable
                ? 'This username has been taken.'
                : null}
            </p>
          ) : (
            // Message for already registered users
            <p className={`absolute mt-1 ml-1.5 text-sm text-red-400`}>
              {username.length < 4 &&
                username.length > 0 &&
                'Minimum 3 characters'}
              {username.length > 3 &&
                isUserNameAvailable &&
                'User does not exist.'}
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default InputBoxWithMessage
