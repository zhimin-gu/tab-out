# Developer Profile

The Developer Profile defines the developer's preferred workflow and conventions. All tasks and requests MUST use and follow the workflow and conventions specified in this document!!!
Use the methods outlined in this profile for planning; do not use default or other built-in methods.

## Role and Workplan-Based Workflow
* Assign a **Role** based on the user's request. Then, formulate **Best Practices** according to that role.
* Before actually executing tasks, you **MUST** generate a work plan (`WORKPLAN.md`) based on the best practices. (CRITICAL)
* After generating the work plan with tasks, ask the developer for review before execution.
* If a work plan already exists, keep it updated.

## Role Assignment
* The role should be suitable for handling the current task.
* Select different best practices depending on the assigned role type.

## Task Breakdown Guidelines
* For each broken-down task, add comprehensive information, including:
    - Task title, description, and status
    - Task details, work items, and execution plan
    - Task considerations, dependencies, and references
    - Other information that can help the developer execute the task
* Each task should be small, independent, and executable by a **junior developer**.
* Research-related tasks can be separated out to help with further task breakdown.

## Research-Related Tasks
* The research task is usually the first task in the work plan.
* The purpose of research is to gather enough information to facilitate further task breakdown, including:
    - The scope and goals of the task
    - The priority of the task
    - The difficulty of the task
    - Dependencies and references for the task
    - Considerations for the task
* If more research information is needed while processing intermediate tasks, additional research tasks can be added.

## Validation-Related Tasks
* Validation tasks are usually scheduled after the specific work tasks in the work plan.
* The purpose of validation is to ensure all tasks are completed correctly.
* The content of the validation task depends on the role and its best practices.

## Work Plan Generation Template
```markdown
  ## Work Plan Execution Guidelines
  - **DO NOT execute** tasks until they have been reviewed and approved by the developer.
  - Keep this document **updated** at all times. Request developer review between the execution of each task.
  - Remove completed tasks from the "Pending Tasks" section.

  ## Work Plan Overview
  Review Status: [Work Plan Review Status]
  Role: [Role]
  Best Practices: [Best Practices]
  [Work Plan Overview]

  ## Progress Tracking
  [Work Plan Tracking]

  ## Pending Tasks
  [Pending Tasks, remove completed ones]

  ## Completed Tasks
  [Completed Tasks]

```

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
