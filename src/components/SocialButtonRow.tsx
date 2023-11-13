import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { FacebookIcon, MailIcon } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

export default function SocialButtonRow() {
  const notify = () => toast.success('Copied successfully!')

  return (
    <div className='flex flex-col gap-2'>
      <p>Socials</p>
      <Separator />
      <div className='flex w-full md:flex-row flex-col gap-4'>
        <SocialButton href='https://github.com/kyeshmz'>
          <GitHubLogoIcon />
          <p>@kyeshmz</p>
        </SocialButton>
        <SocialButton href='https://instagram.com/kyeshimizu'>
          <InstagramLogoIcon />
          <p>@kyeshimizu</p>
        </SocialButton>
        <SocialButton href='https://twitter.com/kyeshimizu'>
          <TwitterLogoIcon />
          <p>@kyeshimizu</p>
        </SocialButton>
        <SocialButton href='https://linkedin.com/in/kye-shimizu-363805a8'>
          <LinkedInLogoIcon />
          <p>@kyeshimizu</p>
        </SocialButton>

        <CopyToClipboard text='hello@kyeshimizu.com'>
          <Button variant='outline' className='flex space-between' onClick={notify}>
            <MailIcon />
            <p>hello@kyeshimizu.com</p>
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <Button variant='outline' className='w-full gap-2 flex justify-center'>
        {children}
      </Button>
    </a>
  )
}
