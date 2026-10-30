import { ChakraProvider, Box, Heading, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Footer from "./components/Footer";

const LAST_UPDATED = "October 30, 2026";
const CONTACT_EMAIL = "isaac@vanhorn.com";

const Section = ({ title, children }) => (
  <Box as="section" mt={8}>
    <Heading as="h2" size="md" mb={3}>
      {title}
    </Heading>
    {children}
  </Box>
);

const LegalPage = ({ title, children }) => (
  <ChakraProvider>
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box as="main" flex="1" maxWidth="768px" mx="auto" px={6} py={12} lineHeight="tall">
        <Link as={RouterLink} to="/" color="purple.600">
          ← Back to home
        </Link>
        <Heading as="h1" mt={6}>
          {title}
        </Heading>
        <Text color="gray.500" mt={2}>
          Last updated: {LAST_UPDATED}
        </Text>
        {children}
      </Box>
      <Footer />
    </Box>
  </ChakraProvider>
);

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <Text mt={6}>
        This is the personal website of Isaac Van Horn at isaacvanhorn.com (the "Site"). This policy
        explains what information is collected when you visit the Site and how it is used.
      </Text>

      <Section title="Information I collect">
        <Text>
          The Site does not use cookies, analytics, advertising trackers, or user accounts, and it does
          not ask you to submit personal information through any form.
        </Text>
        <Text mt={3}>Information may be collected in the following limited ways:</Text>
        <UnorderedList mt={3} spacing={2}>
          <ListItem>
            <b>Hosting logs.</b> The Site is hosted on GitHub Pages. GitHub may log technical
            information such as your IP address, browser type, and the pages you request for security
            and operational purposes. See the{" "}
            <Link href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" isExternal color="purple.600">
              GitHub Privacy Statement
            </Link>
            .
          </ListItem>
          <ListItem>
            <b>Email.</b> If you email me, I receive your email address and anything you include in
            your message. I use it only to reply to you.
          </ListItem>
          <ListItem>
            <b>Project demos.</b> Some demos are embedded from other services (for example, GitHub Pages
            or Google Apps Script) or connect to servers I operate. Any information you enter into a demo
            is used only to make that demo work. Embedded third-party services are governed by their own
            privacy policies.
          </ListItem>
        </UnorderedList>
      </Section>

      <Section title="How information is used and shared">
        <Text>
          I do not sell, rent, or share your personal information with anyone for marketing purposes. I
          may disclose information if required to do so by law.
        </Text>
      </Section>

      <Section title="External links">
        <Text>
          The Site links to external websites such as GitHub and LinkedIn. I am not responsible for the
          privacy practices of those sites.
        </Text>
      </Section>

      <Section title="Children's privacy">
        <Text>
          The Site is not directed at children under 13, and I do not knowingly collect information from
          them.
        </Text>
      </Section>

      <Section title="Your choices">
        <Text>
          If you have emailed me and would like your correspondence deleted, contact me and I will remove
          it.
        </Text>
      </Section>

      <Section title="Changes to this policy">
        <Text>
          I may update this policy from time to time. Changes take effect when posted on this page, and
          the "Last updated" date above will be revised.
        </Text>
      </Section>

      <Section title="Contact">
        <Text>
          Questions about this policy can be sent to{" "}
          <Link href={`mailto:${CONTACT_EMAIL}`} color="purple.600">
            {CONTACT_EMAIL}
          </Link>
          .
        </Text>
      </Section>
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <Text mt={6}>
        By accessing isaacvanhorn.com (the "Site"), you agree to these Terms of Service. If you do not
        agree, please do not use the Site.
      </Text>

      <Section title="Use of the Site">
        <Text>
          The Site is a personal portfolio. You may browse it and try the project demos for personal,
          non-commercial purposes. You agree not to:
        </Text>
        <UnorderedList mt={3} spacing={2}>
          <ListItem>attempt to disrupt, overload, or gain unauthorized access to the Site, its demos, or any connected servers;</ListItem>
          <ListItem>use the Site or its demos for any unlawful purpose; or</ListItem>
          <ListItem>submit malicious code or content through any demo.</ListItem>
        </UnorderedList>
      </Section>

      <Section title="Project demos">
        <Text>
          Demos are provided for illustration only. They may be incomplete, change without notice, or be
          taken offline at any time. Do not enter sensitive or real personal, business, or financial
          information into any demo.
        </Text>
      </Section>

      <Section title="Intellectual property">
        <Text>
          Unless otherwise noted, the content of the Site, including text, images, and design, belongs to
          Isaac Van Horn. Source code published in my public repositories is governed by the license
          included in each repository.
        </Text>
      </Section>

      <Section title="Third-party sites and services">
        <Text>
          The Site links to and embeds content from third parties. I do not control and am not
          responsible for their content, availability, or practices.
        </Text>
      </Section>

      <Section title="Disclaimer">
        <Text>
          The Site and its demos are provided "as is" and "as available," without warranties of any kind,
          express or implied, including warranties of merchantability, fitness for a particular purpose,
          or non-infringement.
        </Text>
      </Section>

      <Section title="Limitation of liability">
        <Text>
          To the fullest extent permitted by law, I will not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of data, arising from your use of, or
          inability to use, the Site or its demos.
        </Text>
      </Section>

      <Section title="Changes to these terms">
        <Text>
          I may update these terms from time to time. Continued use of the Site after changes are posted
          means you accept the revised terms.
        </Text>
      </Section>

      <Section title="Privacy">
        <Text>
          See the{" "}
          <Link as={RouterLink} to="/privacy" color="purple.600">
            Privacy Policy
          </Link>{" "}
          for how information is handled.
        </Text>
      </Section>

      <Section title="Contact">
        <Text>
          Questions about these terms can be sent to{" "}
          <Link href={`mailto:${CONTACT_EMAIL}`} color="purple.600">
            {CONTACT_EMAIL}
          </Link>
          .
        </Text>
      </Section>
    </LegalPage>
  );
}
