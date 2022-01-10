import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import IconHeart from '../components/svgIcons/IconHeart';
import IconStar from '../components/svgIcons/IconStar';

/**
 * N.B. there is no data in the endpoint for sponsors
 * so I just show the sponsor button after 100 like in the day.
 *
 * N.B. Both sponsor and star buttons are not as is in gitHub
 * as they would require Auth + extra API calls to activley manage these
 * as part of your profile.
 * */

const Buttons = ({ data }) => (
  <>
    {(data.starsSince > 100 || data.popularRepository?.repositoryName) && (
      <Col>
        <Button
          variant='outline-secondary'
          size='sm'
          href={data.url}
          target='_blank'>
          <IconHeart /> Sponsor
        </Button>
      </Col>
    )}
    <Col>
      <Button
        variant='outline-secondary'
        size='sm'
        href={data.url}
        target='_blank'>
        <IconStar /> Star
      </Button>
    </Col>
  </>
);

export default memo(Buttons);
