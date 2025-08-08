🧭 What Are NavTabs?

Nav components with the variant="tabs" or variant="pills" prop are 
used to create tabbed navigation interfaces. 
They’re perfect when you want to switch content panels
without navigating away from the page.

They work together with Tab.Container to manage active state and switch tab content.


// Basic structure
import { Tab, Nav, Row, Col } from 'react-bootstrap';

function TabExample() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h4>First Tab Content</h4>
              <p>This is the content of the first tab.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h4>Second Tab Content</h4>
              <p>This is the content of the second tab.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}


// Component breakdown
import { Tab, Nav, Row, Col } from 'react-bootstrap';

function TabExample() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h4>First Tab Content</h4>
              <p>This is the content of the first tab.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h4>Second Tab Content</h4>
              <p>This is the content of the second tab.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

// Variants
variant="tabs" (default look with underlines)
variant="pills" (rounded pill-style tabs)

// Responsiveness
To make it horizontal for desktop and vertical for mobile, you can use responsive layout utilities:
 <Row>
  <Col md={3}>
    <Nav variant="pills" className="flex-column flex-md-row">
      ...
    </Nav>
  </Col>
</Row>
