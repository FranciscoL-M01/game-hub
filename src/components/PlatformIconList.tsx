import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'; 
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { Platform } from '@/hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        // name: Playstation
        // slug: playstation
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox, 
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        // 1 = theme.space value. The default space is 4px.
      <HStack marginY={1}>
        {platforms.map((platform) => {
            const IconComponent = iconMap[platform.slug];
            return <IconComponent key={platform.id} color = '#71717a' />;
        })}
      </HStack>
    );
};

export default PlatformIconList