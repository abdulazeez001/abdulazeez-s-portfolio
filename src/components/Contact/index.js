import { NumberedHeading } from '@common/styles';
import PropTypes from 'prop-types';
import { StyledContactSection } from './styles';

const Contact = ({ user = {} }) => {
  return (
    <StyledContactSection id="contact">
      <NumberedHeading overline>What’s Next?</NumberedHeading>
      <h2 className="title">Get In Touch</h2>
      {user.isHireable ? (
        <p>
          I&apos;m currently open for new opportunities, feel free to get contact. If you have any
          questions or want to talk, I will do my best to get back.
        </p>
      ) : (
        <p>
          I&apos;m currently open for new opportunities, feel free to get contact. If you have any
          questions or want to talk, I will do my best to get back.
        </p>
      )}
      {user.email && (
        <a className="email-link" href={`mailto:${user.email}`}>
          Say Hello
        </a>
      )}
    </StyledContactSection>
  );
};
Contact.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Contact;
