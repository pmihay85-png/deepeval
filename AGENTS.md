# Playwright Agents

A suite of specialized Copilot agents for Playwright browser automation testing and validation.

## Available Agents

### 🔧 Playwright Healer
**File:** `.playwright-healer.md`  
**Purpose:** Fix broken Playwright tests and diagnose automation issues

**Capabilities:**
- Error classification and root cause analysis
- Flakiness detection and fixes
- Selector resilience improvements
- Timing synchronization solutions
- Common pattern repairs

**Use When:**
- Tests are failing in CI but passing locally
- Tests are flaky/intermittent
- Selectors are breaking
- Navigation isn't working
- Timing issues occur

**Example:**
```
@copilot /playwright-healer
Fix the failing login test - it times out waiting for the dashboard
```

---

### 🎨 Playwright Generator
**File:** `.playwright-generator.md`  
**Purpose:** Generate Playwright test files, page objects, and automation scaffolding

**Capabilities:**
- Create test files with fixtures
- Build Page Object Models (POM)
- Generate test data factories
- Scaffold helper utilities
- Generate configuration files

**Use When:**
- Starting new Playwright tests
- Building page object models
- Creating test infrastructure
- Generating test helpers
- Scaffolding fixtures

**Example:**
```
@copilot /playwright-generator
Generate a Page Object Model for the login page with fixtures
```

---

### ✅ Playwright Validator
**File:** `.playwright-validator.md`  
**Purpose:** Validate test quality, coverage, and best practices

**Capabilities:**
- Verify test structure quality
- Check assertion meaningfulness
- Validate locator robustness
- Assess reliability and flakiness
- Analyze test coverage
- Check accessibility testing

**Use When:**
- Reviewing test code
- Before merging tests
- Assessing test quality
- Improving reliability
- Building best practices

**Example:**
```
@copilot /playwright-validator
Review these tests for quality and generate a validation report
```

---

### 🐛 Playwright Debugger
**File:** `.playwright-debugger.md`  
**Purpose:** Debug test failures and investigate browser automation issues

**Capabilities:**
- Analyze failure logs and traces
- Reproduce minimal test cases
- Inspect page state and DOM
- Trace test execution
- Collect diagnostic information
- Identify systematic issues

**Use When:**
- Tests fail mysteriously
- Behavior is inconsistent/flaky
- You need detailed investigation
- Debugging timing issues
- Tracing selector problems

**Example:**
```
@copilot /playwright-debugger
Debug why this test passes locally but fails in CI
```

---

## Quick Start

### Invoking Agents

Use the slash command syntax in Copilot:

```bash
# Invoke specific agent with context
@copilot /playwright-healer

# With description of problem
@copilot /playwright-debugger
My test times out when loading the dashboard page
```

### Agent Selection Guide

| Problem | Agent |
|---------|-------|
| Test is broken, won't run | Healer |
| Test is flaky/intermittent | Healer or Debugger |
| Need to write new tests | Generator |
| Want to review test quality | Validator |
| Test fails for unknown reason | Debugger |
| Selector changed | Healer |
| Timing issues | Healer or Debugger |
| Build test infrastructure | Generator |

---

## Best Practices

### 1. Provide Context
Include relevant information when invoking:
- Test file path
- Error message
- Expected vs actual behavior
- When issue occurs (always/intermittent)

### 2. Use Appropriate Agent
- **Healer:** For known errors you need fixed
- **Generator:** For new code you need written
- **Validator:** For quality review before merge
- **Debugger:** For investigation and diagnosis

### 3. Follow Recommendations
Each agent provides specific output format:
- Healer: Issue → Root Cause → Repair → Validation
- Generator: Structure → Code → Examples → Config
- Validator: Checklist → Issues → Recommendations → Score
- Debugger: Problem → Analysis → Reproduction → Solution

### 4. Iterate Systematically
- Start with diagnosis (Debugger or Healer)
- Move to generation or repair
- Validate the result (Validator)
- Verify it works before committing

---

## Agent Specifications

### Output Formats

#### Healer Output
```
Issue Summary → Root Cause → Repair Code → Validation Steps → Prevention Tips
```

#### Generator Output
```
File Structure → Complete Code → Usage Examples → Configuration → Next Steps
```

#### Validator Output
```
Quality Score → Critical Issues → Warnings → Recommendations → Detailed Findings
```

#### Debugger Output
```
Issue Summary → Root Cause Analysis → Reproduction Case → Solution → Verification
```

### Tooling

All agents leverage:
- **Playwright Best Practices** - Modern locator strategies
- **Page Object Model** - Maintainable test architecture
- **Fixture-Based Setup** - Reusable test infrastructure
- **Proper Synchronization** - Reliable waits and assertions
- **Error Recovery** - Retry logic and graceful degradation

---

## Integration with CI/CD

### Using Validators in PR Review
```bash
# Get quality score before merge
@copilot /playwright-validator
Validate all tests in tests/ directory
```

### Using Debugger for Failed CI Runs
```bash
# When CI tests fail
@copilot /playwright-debugger
These tests failed in CI: [trace file/logs]
```

### Using Generator for New Features
```bash
# When adding new features
@copilot /playwright-generator
Generate test scaffold for the new dashboard page
```

---

## Troubleshooting

### Agent Not Responding
- Ensure agent file exists in repository root or `.agents/` directory
- Check that file naming matches slash command exactly
- Verify YAML frontmatter if present

### Poor Quality Output
- Provide more context (error messages, code snippets)
- Include full test file, not just snippet
- Specify what you've already tried
- Add reproduction steps

### Specific Issues
| Issue | Solution |
|-------|----------|
| Agent gives wrong advice | Provide more specific context |
| Output is too generic | Ask for specific file/line analysis |
| Can't understand recommendation | Ask agent to explain in simpler terms |

---

## Contributing New Agents

To add new agents:

1. Create new `.playwright-[agent-name].md` file
2. Include Instructions section with role and capabilities
3. Add workflows with concrete patterns and examples
4. Provide output format specifications
5. Update this AGENTS.md file

---

## Resources

- [Playwright Official Docs](https://playwright.dev)
- [Test Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging](https://playwright.dev/docs/debug)
- [Trace Viewer](https://playwright.dev/docs/trace-viewer)

---

**Last Updated:** 2026-06-03
**Agents:** Healer, Generator, Validator, Debugger
