/*
// Let Var Const

=> var :

Scope: Function-scoped.
If declared inside a function, it is accessible only within that function.
If declared outside a function, it becomes globally scoped.

Hoisting: Variables declared with var are hoisted to the top of their scope but are initialized as undefined.

Re-declaration: Can be re-declared and updated within the same scope.

Usage: Historically used, but less preferred due to its scoping issues.

understanding about the concept of variables var, let,const
also known scoping and hosting concept.

//Examples

var x = 10;
function example() {
  var y = 20; // Function-scoped
  if (true) {
    var z = 30; // Accessible outside the block
  }
  console.log(z); // 30
}
console.log(x); // 10


=> let:

Scope: Block-scoped.
Accessible only within the block {} in which it is defined.

Hoisting: Variables declared with let are hoisted, but they remain in a "temporal dead zone" until the declaration is encountered.

Re-declaration: Cannot be re-declared in the same scope, but can be updated.

Usage: Use let when you need a variable whose value will change and is limited to a specific block.

//Example
let x = 10;
if (true) {
  let y = 20; // Block-scoped
  console.log(y); // 20
}
console.log(x); // 10
// console.log(y); // Error: y is not defined


=>const:

Scope: Block-scoped (like let).

Hoisting: Similar to let, it is hoisted but remains in the "temporal dead zone" until the declaration is encountered.

Re-declaration/Update: Cannot be re-declared or updated.

The value is read-only for primitive types (e.g., numbers, strings).
For objects or arrays, the reference cannot change, but the contents can be modified.

Usage: Use const for variables that should not be reassigned.

//Example:
const x = 10;
// x = 20; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed, since the reference to the array doesn't change
console.log(arr); // [1, 2, 3, 4]


Here’s a detailed explanation of `let`, `var`, and `const` in JavaScript:

---

### 1. **`var`**
- **Scope**: Function-scoped.
  - If declared inside a function, it is accessible only within that function.
  - If declared outside a function, it becomes globally scoped.
- **Hoisting**: Variables declared with `var` are **hoisted** to the top of their scope but are initialized as `undefined`.
- **Re-declaration**: Can be re-declared and updated within the same scope.
- **Usage**: Historically used, but less preferred due to its scoping issues.

#### Example:
```javascript
var x = 10;
function example() {
  var y = 20; // Function-scoped
  if (true) {
    var z = 30; // Accessible outside the block
  }
  console.log(z); // 30
}
console.log(x); // 10
```

---

### 2. **`let`**
- **Scope**: Block-scoped.
  - Accessible only within the block `{}` in which it is defined.
- **Hoisting**: Variables declared with `let` are hoisted, but they remain in a **"temporal dead zone"** until the declaration is encountered.
- **Re-declaration**: Cannot be re-declared in the same scope, but can be updated.
- **Usage**: Use `let` when you need a variable whose value will change and is limited to a specific block.

#### Example:
```javascript
let x = 10;
if (true) {
  let y = 20; // Block-scoped
  console.log(y); // 20
}
console.log(x); // 10
// console.log(y); // Error: y is not defined
```

---

### 3. **`const`**
- **Scope**: Block-scoped (like `let`).
- **Hoisting**: Similar to `let`, it is hoisted but remains in the **"temporal dead zone"** until the declaration is encountered.
- **Re-declaration/Update**: 
  - **Cannot** be re-declared or updated.
  - The value is **read-only** for primitive types (e.g., numbers, strings).
  - For objects or arrays, the reference cannot change, but the contents can be modified.
- **Usage**: Use `const` for variables that should not be reassigned.

#### Example:
```javascript
const x = 10;
// x = 20; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed, since the reference to the array doesn't change
console.log(arr); // [1, 2, 3, 4]



### Summary Table:

| Feature          | `var`                                 | `let`                        | `const`              |
|------------------|------------------------              |-----------------------       |----------------------|
| **Scope**        | Function-scoped                      | Block-scoped                 | Block-scoped         |
| **Hoisting**     | Hoisted (initialized to `undefined`) | Hoisted (temporal dead zone) | Hoisted (temporal dead z
| **Re-declaration*| Allowed                              | Not allowed                  | Not allowed          |
| **Update**       | Allowed                              | Allowed                      | Not allowed (for primitives) |
| **Preferred Usage| Avoid (legacy)                       | Use for mutable variables    | Use for constants   |












*/
